import Link from 'next/link';
import {Button, Card} from 'semantic-ui-react';
import fetch from 'isomorphic-unfetch';

const Index = ({ notes }) => {
  return (
    <div className="notes-container">
      <h1>My Todo</h1>
      <div className="grid wrapper">
        {notes.map(note => {
          return (
            <div key={note._id}>
              <Card>
                <Card.Content>
                  <Card.Header secondary>
                    <Link href={`/${note._id}`}>
                      <a className="header">{note.title}</a>
                    </Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/${note._id}`}>
                    <Button secondary>View</Button>
                  </Link>
                  <Link href={`/${note._id}/edit`}>
                    <Button secondary>Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/todo');
  const { data } = await res.json();

  return { notes: data }
}

export default Index;