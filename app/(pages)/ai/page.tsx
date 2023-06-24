import { getUser } from "@/app/actions/user/getUser";

const AiPage = async () => {
  const user = await getUser();

  return (
    <>
      <h1>Ai Page</h1>
    </>
  );
};

export default AiPage;
