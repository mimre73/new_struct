import { ActionName } from "@/core/domain/enums/ActionName";
import useStore from "@/core/store/hooks/useStore";
import { useStoreSelector } from "@/core/store/hooks/useStoreSelector";
const UserCrudButtons: React.FC = (props) => {
  const { dispatchAction } = useStore();
  const stateManager = useStoreSelector(state=>state.stateManager)
  console.log('stateManager',stateManager.stateManager)

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <button
        onClick={() => {
          dispatchAction({
            actionId: ActionName[ActionName.counterIncrement],
            actionName: ActionName.counterIncrement,
            appId: "container",
            data: 'heelp',
          });
        }}
      >
        <span>Increment Counter</span>
      </button>
      <button
        onClick={() => {
          dispatchAction({
            actionId: ActionName[ActionName.counterDecrementCounter],
            actionName: ActionName.counterDecrementCounter,
            appId: "container",
            data: 'heelp2',
          });
        }}
      >
        <span>decrement</span>
      </button>
    </div>
  );
};

export default UserCrudButtons;
