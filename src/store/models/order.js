import axios from "axios";
import { URL } from "./evm";
export const order = {
  state: {
    orders: [],
  },
  reducers: {
    setData(state, orders) {
      return {
        ...state,
        orders,
      };
    },
  },
  effects: (dispatch) => ({
    async getAll(token) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // console.log(token);
        const { data } = await axios.get(
          `${URL}order`,
          config
        );
        console.log(data);
        if (data.statusCode != 200) {
          return null;
        }
        this.setData(data.data);
      } catch (error) {
        return null;
      }
    },
  }),
};
