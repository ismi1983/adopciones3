export interface ResponseLogin {
    status:string;
    message: string;
    data: {
        token:string
    };
}