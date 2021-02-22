interface EnvDependentVarProps {
  production?:string
  development?:string
}
export const API_URL:EnvDependentVarProps ={
  production: 'https://api.veed.io/api/'
}