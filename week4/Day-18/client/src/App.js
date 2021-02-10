import React from "react";
import ApolloClient from "apollo-boost";
import gpl from "graphql-tag";
import { ApolloProvider, Query } from "react-apollo";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
});

const recipesQuery = gpl`
{
  tasks {
  	id
    nama
    alamat
    nohp
    pekerjaan
	}
}`;

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container-fluid colorInput">
        <h2 className="text-uppercase text-center">Daftar Client</h2>
        <Query query={recipesQuery}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading…</p>;
            if (error) return <p>Something went wrong</p>;

            return (
              <div>
                <table className="table table-striped css-serial">
                  <thead className="table-dark text-center">
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Nama</th>
                      <th scope="col">Alamat</th>
                      <th scope="col">No Hp</th>
                      <th scope="col">Pekerjaan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.tasks.map(({ id, nama, alamat, nohp, pekerjaan }) => (
                      <tr key={id}>
                        <td></td>
                        <td>{nama}</td>
                        <td>{alamat}</td>
                        <td>{nohp}</td>
                        <td>{pekerjaan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }}
        </Query>
      </div>
    </ApolloProvider>
  );
}

export default App;
