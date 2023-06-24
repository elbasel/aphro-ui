import { getUser } from "@/app/actions/user/getUser";
import { type AppUser } from "@/app/lib/user/type";

const TestGetUser = async () => {
  const { name, email, imageUrl }: AppUser = await getUser();

  return (
    <>
      <h1>
        Test <code>getUser</code>
      </h1>
      <p>Hello {name}!</p>
      <p>Your email is &quot;{email}&quot;</p>
      <p>Your image url is &quot;{imageUrl}&quot;</p>
    </>
  );
};

export default TestGetUser;
