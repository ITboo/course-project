import { promises as fs } from 'fs'
import path from 'path'

import express, { type Express } from 'express'
import { logger } from './logger'
import { env } from './env'

const checkFileExists = async (filePath: string) => {
  return await fs
    .access(filePath, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false)
}

const findWebappDistDir = async (dir: string): Promise<string | null> => {
  const maybeWebappDistDir = path.resolve(dir, 'frontend/dist')
  if (await checkFileExists(maybeWebappDistDir)) {
    return maybeWebappDistDir
  }
  if (dir === '/') {
    return null
  }
  return await findWebappDistDir(path.dirname(dir))
}

export const applyServeWebApp = async (app: Express) => {
  const frontendDistDir = await findWebappDistDir(__dirname)
  logger.info(frontendDistDir)
  if (!frontendDistDir) {
    if (env.NODE_ENV === 'production') {
      throw new Error('Frontend dist dir not found')
    } else {
      logger.error('frontend-serve', 'Frontend dist dir not found')
      return
    }
  }

  const htmlSource = await fs.readFile(path.resolve(frontendDistDir, 'index.html'), 'utf8')
  app.use(express.static(frontendDistDir, { index: false }))
  app.get('/*', (req, res) => {
    logger.info(htmlSource)
    res.send(htmlSource)
  })
}