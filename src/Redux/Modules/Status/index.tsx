/***********************************/
/************* Actions *************/
/***********************************/

const enum StatusActionType {
  REHYDRATE = 'persist/REHYDRATE'
}

/***********************************/
/************* Reducer *************/
/***********************************/

export interface StatusState {
  isPersist: boolean;
}

interface StatusAction {
  type: StatusActionType;
  payload: any;
}

export const initStatusState: StatusState = {
  isPersist: false
};

const statusReducer = (state: StatusState = initStatusState, action: StatusAction) => {
  switch (action.type) {
    case StatusActionType.REHYDRATE: {
      return { ...state, isPersist: true };
    }
    default: return state;
  }
};

export default statusReducer;