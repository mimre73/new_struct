import { ActionName } from "container/enums";
import useStore from "container/store/hooks";
import { useStoreSelector } from "container/store/selectors";
import { useEffect, useState } from "react";

export function useUserPresenter() {
    const [userInfo, setUserInfo] = useState<any>(null);
    const [token, setToken] = useState(null);

    const { dispatchAction } = useStore();

    const { stateManager } = useStoreSelector((state) => state.stateManager);
    useEffect(() => {
      setUserInfo(stateManager[ActionName[ActionName.setUserInfo]])
      setToken(stateManager[ActionName[ActionName.setToken]])
    }, [stateManager]);
    const loginUser = ()=>{
      dispatchAction({
        actionName: ActionName.setUserInfo,
        actionId: ActionName[ActionName.setUserInfo],
        appId: "app1",
        data: {
          firstName: "Mohammad",
          lastName: "Rezaei",
          imageSrc:
            "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png",
        },
      });
      
      dispatchAction({
        actionName: ActionName.setToken,
        actionId: ActionName[ActionName.setToken],
        appId: "app1",
        data: "tokentokentokentokentoken",
      });
    }
    const logoutUser = ()=>{
      dispatchAction({
        actionName: ActionName.setUserInfo,
        actionId: ActionName[ActionName.setUserInfo],
        appId: "app1",
        data: null,
      });
      
      dispatchAction({
        actionName: ActionName.setToken,
        actionId: ActionName[ActionName.setToken],
        appId: "app1",
        data: null,
      });
    }
    return {
      loginUser,
      logoutUser,
        token,
        userInfo
    };
  }