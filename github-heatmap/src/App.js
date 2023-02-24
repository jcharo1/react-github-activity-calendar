// Import everything needed to use the `useQuery` hook
import { useQuery, gql, useMutation } from "@apollo/client";
import Graph from "./Graph";
const GET_LOCATIONS = gql`
  query ($userName: String!) {
    user(login: $userName) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

// curl --request POST \
//   --header 'content-type: application/json' \
//   --url 'https://flyby-router-demo.herokuapp.com/' \
//   --data '{"query":"query GetLocations { locations {id name description photo}}"}'

// function DisplayLocations() {
//   //   const [gitAct] = useMutation(GET_LOCATIONS);
//   //   console.log(gitAct);
//   const { loading, error, data } = useQuery(GET_LOCATIONS, {
//     variables: { userName: "jcharo1" },
//   });
//   //   const {data, error,} =  gitAct({
//   //     "variables":
//   //     { "userName": "jcharo1"}}
//   //   )

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error : {error.message}</p>;

//   return data.locations.map(({ id, name, description, photo }) => (
//     <div key={id}>
//       <h3>{name}</h3>
//       <img width="400" height="250" alt="location-reference" src={`${photo}`} />
//       <br />
//       <b>About this location:</b>
//       <p>{description}</p>
//       <br />
//     </div>
//   ));
// }

export default function App() {
  return (
    <div>
      <Graph />

      {/* <DisplayLocations /> */}
    </div>
  );
}
