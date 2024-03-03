import { UserController }from "@/core/presentation/controllers";

const UserCrudButtons: React.FC = (props) => {
  const controller = new UserController()
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <button
        onClick={controller.createUser}
      >
        <span>find one user</span>
      </button>
    </div>
  );
};

export default UserCrudButtons;
