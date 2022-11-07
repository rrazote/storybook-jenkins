
const initial_object = {
    by_id: {},
    all_ids: []
}

const set_initial_object = () => {
    return {...initial_object};
}

const normalize_state = (data, state, id_name) => {
    if (!id_name) {
        console.error('Normalizing state cannot be done without an unique id.');
        return;
    }

    if (!Array.isArray(data)) {
        console.error('Array is needed in passing data in normalizing state.');
        return;
    }
    // index by id 
    for (const item of data) {
        // look up and replace and de duplicate using set 
        let temp_item = { ...item, id: item[id_name] };
        state.by_id[item[id_name]] = temp_item;
        state.all_ids = [...new Set([...state.all_ids, item[id_name]])]; 
    }
}

const Common_Functions = {
    set_initial_object,
    normalize_state
}

export default Common_Functions;