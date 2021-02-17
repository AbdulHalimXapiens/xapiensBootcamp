const initialState = { anchor: 'left',
    vendor: [],
    open: false,
    id: '',  
    name: '',
    nama_produk: '',
    harga: '',
    jumlah_stok: ''
 };


export function vendor(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_VENDOR':
            return {
            ...state,
            vendor: action.vendor
            };
        case 'VENDOR_DETAIL':
            return {
                ...state,
                id: action.id,  
                name: action.name,
                nama_produk: action.nama_produk,
                harga: action.harga,
                jumlah_stok: action.jumlah_stok
            };
        case "USER_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };    
        default:
            return state
    }
  }