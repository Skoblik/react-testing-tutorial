import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json(
      {
      users: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'Alice Smith' },
        { id: 4, name: 'Bob Johnson' },
        { id: 5, name: 'Charlie Brown' },
        { id: 6, name: 'Diana Prince' },
        { id: 7, name: 'Ethan Hunt' },
        { id: 8, name: 'Fiona Gallagher' },
        { id: 9, name: 'George Bailey' },
        { id: 10, name: 'Hannah Montana' },
        { id: 11, name: 'Isaac Newton' },
        { id: 12, name: 'Julia Roberts' },
        { id: 13, name: 'Kevin Hart' },
        { id: 14, name: 'Laura Palmer' },
        { id: 15, name: 'Michael Scott' },
        { id: 16, name: 'Nancy Drew' },
        { id: 17, name: 'Oscar Wilde' },
        { id: 18, name: 'Pam Beesly' },
        { id: 19, name: 'Quentin Tarantino' },
        { id: 20, name: 'Rachel Green' }
      ],
      },
      { status: 200 } // Explicitly set the status code
    );
  }),
];