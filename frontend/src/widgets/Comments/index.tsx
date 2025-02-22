import { format } from 'date-fns/format';

const Comments = ({comments}) => {
  return (
    <div className="w-1/2 m-auto p-4 flex flex-col gap-2">
    {comments.map((comment) => (
      <div className="p-2 border ">
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">
            {comment.author_id}
          </span>
          <span className="text-sm text-gray-500">
            {format(comment.created_at, 'dd-MM-yyyy')}
          </span>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          {comment.text}
        </p>
      </div>
    ))}
  </div>
  )
}

export default Comments