import Link from 'next/link';
import styles from '../../styles/User.module.scss';
import MainContainer from './../../components/MainContainer';

const User = ({ user }) => {
  return (
    <MainContainer
      title={user.username}
      keywords={`${user.name}, ${user.username}`}
    >
      <div className={styles.user}>
        <h1>User {user.id}</h1>
        <div>
          <p>Name - {user.name}</p>
          <p>Username - {user.username}</p>
          <p>email - {user.email}</p>
        </div>
        <Link href="/users">
          <a>Back</a>
        </Link>
      </div>
    </MainContainer>
  );
};

export default User;

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user },
  };
}
