import Agent from "@/components/Agent";

const page = () => {
  return (
    <>
      <h3>Interview Generation</h3>
      <Agent userName="Your" userId="user1" type="generate" />
    </>
  );
};

export default page;
