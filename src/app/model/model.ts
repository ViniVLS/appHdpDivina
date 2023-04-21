export class Paciente {
  cd_MEDICO_RESP: string;
  cd_UNIDADE: string;
  ds_CONVENIO: string;
  ds_SETOR_ATENDIMENTO: string;
  ds_risco: string;
  dt_ENTRADA: string;
  dt_PREVISTO_ALTA: string;
  horas: string;
  ie_SEXO: string;
  ie_precaucao: string;
  nm_medico: string;
  nm_paciente: string;
  nr_ANOS: string;
  nr_atendimento: string;
  setor: string;
}
export class Pessoa {
  id: any;
  pessoa: string;
  nome: string;
  cpf: string;
  email: string;
  crm: string;
  conselho: string;
  usuario: string;
  expirasenha = false;
  dtlogin: string;
  
}
export class SelectItem{
  title:string;
  value:string;
  icon:string;
}
export class Usuario {
  codigo: any;
  senha: string;

}
export class ResumoPaciente {
  ds_IDADE: string;
dt_ENTRADA: string;
cd_CID_PRINCIPAL: string;
atendimento: string;
ds_CONVENIO: string;
dt_PREVISTO_ALTA: string;
unidade: string;
evolucao: string;
nm_Paciente: string;
dt_evolucao: string;
medicoe: string;
laudo: string;
ds_risco: string;
ie_precacao: string;
}
export class Comunicado {
nome: string;
status: string;
}
export class Mgs {
  medico: string;
  txt: string;
  comunicado: string;
  }
  export class OcupacaoTotal {
    total_LEITOS: string;
    PERM: string;
    INTERD: string;
    DISP: string;
    OCUP: string;
    ocup_TEMP: string;
    LIVRE: string;
    em_ALTA: string;
    HIGIEN: string;
    RESERVA: string;
    TXOCUP: string;
    txocuo_I: string;
    txocuo_IR: string;
  }

  export class OcupacaoUI {
    CD_SETOR_ATENDIMENTO: string;
    DS_GRUPO: string;
    DS_SETOR_ATENDIMENTO: string;
    TXOCUP: string;
    PERM: string;
    OCUP: string;
    LIVRE: string;
    RESERVA: string;
    HIGIEN: string;
    INTERD: string;
    CD_GRUPO: string;
      }

      export class OcupacaoNEO {
        CD_SETOR_ATENDIMENTO: string;
        DS_GRUPO: string;
        DS_SETOR_ATENDIMENTO: string;
        TXOCUP: string;
        PERM: string;
        OCUP: string;
        LIVRE: string;
        RESERVA: string;
        HIGIEN: string;
        INTERD: string;
        CD_GRUPO: string;
          }

        export class OcupacaoCTI {
          CD_SETOR_ATENDIMENTO: string;
          DS_GRUPO: string;
          DS_SETOR_ATENDIMENTO: string;
          TXOCUP: string;
          PERM: string;
          OCUP: string;
          LIVRE: string;
          RESERVA: string;
          HIGIEN: string;
          INTERD: string;
          CD_GRUPO: string;
           }

           export class OcupacaoEM {
            CD_SETOR_ATENDIMENTO: string;
            DS_GRUPO: string;
            DS_SETOR_ATENDIMENTO: string;
            TXOCUP: string;
            PERM: string;
            OCUP: string;
            LIVRE: string;
            RESERVA: string;
            HIGIEN: string;
            INTERD: string;
            CD_GRUPO: string;
             }

             export class OcupacaoSR {
              CD_SETOR_ATENDIMENTO: string;
              DS_GRUPO: string;
              DS_SETOR_ATENDIMENTO: string;
              TXOCUP: string;
              PERM: string;
              OCUP: string;
              LIVRE: string;
              RESERVA: string;
              HIGIEN: string;
              INTERD: string;
              CD_GRUPO: string;
               }

               export class OcupacaoOUT {
                CD_SETOR_ATENDIMENTO: string;
                DS_GRUPO: string;
                DS_SETOR_ATENDIMENTO: string;
                TXOCUP: string;
                PERM: string;
                OCUP: string;
                LIVRE: string;
                RESERVA: string;
                HIGIEN: string;
                INTERD: string;
                CD_GRUPO: string;
                 }
                 export class Ocupacao {
                  atualizacao: string;
                  ocupacaoUI = new Array<OcupacaoUI>();
                ocupacaoNEO = new  Array<OcupacaoNEO>();
                  ocupacaoCTI = new  Array<OcupacaoCTI>();
                 ocupacaoEM = new  Array<OcupacaoEM>();
                 ocupacaoSR = new Array<OcupacaoSR>();
                 ocupacaoOUT= new  Array<OcupacaoOUT>();
               }

               export class Sol {
                id: string;
               cd_medico: string;
               atendimento: string;
               medico: string;
               dt_liberacao: string;
               ds_convenio: string;
               ds_setor_leito: string;
               nm_paciente: string;
               ds_motivo_consulta: string;
               ds_tipo_parecer: string;
               cd_pessoa_parecer: string;
              }
export class Flash {
  Leito:  string;
  paciente:  string;
    ds_CONVENIO:  string;
   ds_CLINICA:  string;
    dt_ENTRADA_UNIDADE:  string;
   qt_DIA_PERMAN_UNID:  string;
       saps:  string;
}
export class OC {
  ds_triagem: string;
tp_triagem: string;
tp_medico: string;
qt_espera_total: string;
total_cor: string;
atualizacao: string;
total_espera: number;
total_pa: number;
total_emat: number;

}
export class OCPA {
  pa = new Array<OC>();
}
