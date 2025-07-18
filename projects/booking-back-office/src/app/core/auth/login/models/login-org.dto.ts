import { ILoginDTO } from "./login.dto";

export interface ILoginOrgDO  extends ILoginDTO{
  perfil:string
  organization: string
}
