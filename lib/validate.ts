export function validateEmail(email: string){
return /^\S+@\S+\.\S+$/.test(email);
}
export function allowedFileType(name: string){
return /\.(pdf|png|jpe?g)$/i.test(name);
}