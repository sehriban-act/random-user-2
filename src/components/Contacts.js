import React from 'react';

import { Table} from 'semantic-ui-react';

import { useFetch} from '../../utils/functions';

const Contacts = () => {
  const { contactList, isLoading } = useFetch();
  return (

    <div>
      <h2 className="contact-header">Contacts</h2>
      <Table size={'large'} className="table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Username</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Email</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Phone</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Age</Table.HeaderCell>
           
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {isLoading?
           ( <Table.Row>
            <Table.Cell colSpan={5} textAlign="center">
              <p>Loading...</p>
            </Table.Cell>
          </Table.Row> ) :
          contactList?.length === 0 ? (
            <Table.Row>
              <Table.Cell colSpan={5} textAlign="center">
                <p className="nothing-found">Nothing Found</p>
              </Table.Cell>
            </Table.Row>
          ) :(
            contactList?.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell textAlign="center">
                  {item.username.toUpperCase()}
                </Table.Cell>
                <Table.Cell textAlign="center">{item.name}</Table.Cell>
                
                <Table.Cell textAlign="center">{item.email}</Table.Cell>
                <Table.Cell textAlign="center">{item.phone}</Table.Cell>
                <Table.Cell textAlign="center">{item.age}</Table.Cell>
                
              </Table.Row>
            ))
          )
          }
        </Table.Body>
     
      </Table>
    </div>
  );
};

export default Contacts;