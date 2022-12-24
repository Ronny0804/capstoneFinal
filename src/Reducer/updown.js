const intialize = "";

const getInputValues = (state = intialize, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, value } = action.payload;
      return {
        ...state,
        value: {
          ...state,
          id: id,
          value: value,
        },
      };
    default:
      return state;
  }
};

const getImageValues = (state = intialize, action) => {
  switch (action.type) {
    case "ADD_IMG":
      const { id, value } = action.payload;
      console.log(value);
      return {
        ...state,
        value:{
          ...state,
          id: id,
          value: value,
        },
        }
    default:
      return state;
  }
};

const getbagImageValues = (state = intialize, action) => {
  switch (action.type) {
    case "ADDBAG_IMG":
      const { id, value } = action.payload;
      console.log(value);
      return {
        ...state,
        value:{
          ...state,
          id: id,
          value: value,
        },
        }
    default:
      return state;
  }
};

const getMenuValues = (state = intialize, action) => {
  switch (action.type) {
    case "ADD_MENU":
      const { id, value } = action.payload;
      console.log(value);
      return {
        ...state,
        value:{
          ...state,
          id: id,
          value: value,
        },
        }
    default:
      return state;
  }
};

const getTemplateValues = (state = intialize, action) => {
  switch (action.type) {
    case "ADD_TEMPLATE":
      const { id, value ,component} = action.payload;
      console.log(value);
      return {
        ...state,
        value:{
          ...state,
          id: id,
          value: value,
          component:component
        },
        }
    default:
      return state;
  }
};

export  {getInputValues,getImageValues,getMenuValues,getbagImageValues,getTemplateValues};
