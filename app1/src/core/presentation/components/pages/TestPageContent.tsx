import { ActionName } from "container/enums";
import useStore from "container/store/hooks";
import { useStoreSelector } from "container/store/selectors";
import React from "react";
import Header from "../@shared/header/header";

export default function TestPageContent() {
  const { dispatchAction } = useStore();
  const {
    stateManager,
  } = useStoreSelector((state) => state);
  // console.log('ActionName',ActionName)
  return (
    <div className="p-2 space-y-2 border">
      <Header />
      <label className="text-black">
        Test Page From Remote Application Hot refresh test
      </label>
      {/* <p>name Value : {presenter.name}</p> */}
      {/* <p>date Value : {presenter.date}</p> */}
      {/* <Image src={presenter.imageSrc} alt={presenter.name}/> */}

      <section className="flex flex-row gap-x-4">
        {/* <button
          onClick={() =>
            dispatchAction({
              actionId: ActionName[ActionName.counterIncrement],
              actionName: ActionName.counterIncrement,
              appId: "app1",
              data: "zz",
            })
          }
        >
          Increment
        </button> */}
      </section>
    </div>
  );
}
