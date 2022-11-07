import http from "./HttpCommon";

const get_upload_files = params => {
    return http.get('/files_documents', {
        params: params
    });
}

const Upload_Service = {
    get_upload_files
}

export default Upload_Service;