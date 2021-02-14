import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
  gql,
} from "@apollo/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const recipesQuery = gql`
  {
    tasks {
      id
      nama
      alamat
      nohp
      pekerjaan
    }
  }
`;

const UPDATE_DATA = gql`
  mutation UpdateData(
    $id: Int!
    $nama: String!
    $alamat: String!
    $nohp: String!
    $pekerjaan: String!
  ) {
    updateData(
      id: $id
      nama: $nama
      alamat: $alamat
      nohp: $nohp
      pekerjaan: $pekerjaan
    ) {
      id
      nama
      alamat
      nohp
      pekerjaan
    }
  }
`;

const ADD_DATA = gql`
  mutation AddData(
    $nama: String!
    $alamat: String!
    $nohp: String!
    $pekerjaan: String!
  ) {
    addData(nama: $nama, alamat: $alamat, nohp: $nohp, pekerjaan: $pekerjaan) {
      id
      nama
      alamat
      nohp
      pekerjaan
    }
  }
`;

function AddData() {
  let nama, alamat, nohp, pekerjaan;
  const [addData] = useMutation(ADD_DATA, {
    update(cache, { data: { addData } }) {
      cache.modify({
        fields: {
          tasks(existingData = []) {
            const newDataRef = cache.writeFragment({
              data: addData,
              fragment: gql`
                fragment NewTask on Task {
                  id
                  nama
                  alamat
                  nohp
                  pekerjaan
                }
              `,
            });
            return existingData.concat(newDataRef);
          },
        },
      });
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addData({
            variables: {
              nama: nama.value,
              alamat: alamat.value,
              nohp: nohp.value,
              pekerjaan: pekerjaan.value,
            },
          });
          console.log(nama.value);
          nama.value = "";
          alamat.value = "";
          nohp.value = "";
          pekerjaan.value = "";
        }}
      >
        <table>
          <tbody>
            <tr>
              <td>Nama</td>
              <td>
                <input
                  ref={(node) => {
                    nama = node;
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Alamat</td>
              <td>
                <input
                  ref={(node) => {
                    alamat = node;
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>No Hp</td>
              <td>
                <input
                  ref={(node) => {
                    nohp = node;
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Pekerjaan</td>
              <td>
                <input
                  ref={(node) => {
                    pekerjaan = node;
                  }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <button type="submit">Add Data</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

function Todos() {
  const { loading, error, data } = useQuery(recipesQuery);
  const [{ loading: mutationLoading, error: mutationError }] = useMutation(
    UPDATE_DATA
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

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
          {mutationLoading && <p>Loading...</p>}
          {mutationError && <p>Error :( Please try again</p>}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container-fluid colorInput">
        <h2 className="text-uppercase text-center">Daftar Client</h2>
        <AddData />
        <Todos />
      </div>
    </ApolloProvider>
  );
}

export default App;
