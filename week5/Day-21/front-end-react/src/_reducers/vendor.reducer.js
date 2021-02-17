const initialState = {
  anchor: "left",
  vendor: [],
  open: false,
  id: "",
  nama_klub: "",
  nama_pemain: "",
  posisi: "",
  kelebihan: "",
};

export function vendor(state = initialState, action) {
  switch (action.type) {
    case "FETECHED_ALL_VENDOR":
      return {
        ...state,
        vendor: action.vendor,
      };
    case "VENDOR_DETAIL":
      return {
        ...state,
        id: action.id,
        nama_klub: action.nama_klub,
        nama_pemain: action.nama_pemain,
        posisi: action.posisi,
        kelebihan: action.kelebihan,
      };
    case "USER_UPDATED":
      return state;
    case "HANDLE_ON_CHANGE":
      return {
        ...state,
        [action.props]: action.value,
      };
    default:
      return state;
  }
}
