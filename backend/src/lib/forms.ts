export const forms = [
  {
    id: '1',
    title: 'Sample Form',
    author_id: 'lollo',
    likes: 5,
    fields: [
      {
        id: '1',
        type: 'text',
        label: 'What is your name?',
        placeholder: 'Enter your name',
      },
      {
        id: '2',
        type: 'textarea',
        label: 'Tell us about yourself',
        placeholder: 'Write something...',
      },
      {
        id: '3',
        type: 'radio',
        label: 'What is your favorite color?',
        options: ['Red', 'Blue', 'Green'],
      },
      {
        id: '4',
        type: 'checkbox',
        label: 'What are your hobbies?',
        options: ['Reading', 'Traveling', 'Cooking'],
      },
    ],
  },
];