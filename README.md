# HdpApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


_____________________________________________________________________________________________________________________________________________________

DOCUMENTAÇÃO PESSOAL

MIGRAÇÃO PARA ANGULAR 9

Utilizar NODE 13


O primeiro passo é com o CLI, precisamos atualizá-lo globalmente e localmente, mas antes precisamos removê-lo:
npm uninstall -g @angular/cli
E então instalamos novamente (certifique-se de estar no diretório do seu projeto):
npm i -g @angular/cli       // global
npm i -D @angular/cli       // local


tsconfig.json:
Antes => "target": "es5",
Deve ficar => "target": "es2015",


Adicionar um script no package.json:
  "scripts": {
    "postinstall": "ngcc --tsconfig ./tsconfig.app.json"
  } E DEPOIS "npm install" SE OCORRER ERRO PASSE PARA O PRÓXIMO PASSO.


Executar o ngcc a partir do diretório node_modules com o seu tsconfig.json com comando:
./node_modules/.bin/ngcc --tsconfig ./tsconfig.json
OU
npx ngcc --tsconfig ./tsconfig.json SE NÃO FUNCIONAR O ANTERIOR
OU DIRETAMENTE O EXECUTÁVEL
.\node_modules\.bin\ngcc.cmd --tsconfig ./tsconfig.json
POR FIM npm install

--COMMIT=>"070624(3)"

ONDESTROY
Antes=> import { OnDestroy } from '@angular/core/ems2015/src/interface/lifecycle_hooks';
Depois=> import { OnDestroy } from '@angular/core';

--COMMIT=>"070624(4)"


COM NODE 18 AGORA

Reinstalar a versão atual exemplo ng update @angular/cli@versão
DEPOIS
ng update @angular/cli@9

npm install -D @angular/cli@9

npm install


PROTRACTOR:
angular.json=> Remover scripts do Protractor: pode remover toda a seção e2e, exemplo:
"e2e": {
        "builder": "@angular-devkit/build-angular:protractor",
        "options": {
          "protractorConfig": "e2e/protractor.conf.js"
        }
      }
Remover a pasta e2e:Da raiz do projeto.
DEPOIS: npm uninstall protractor.


npm install @fortawesome/angular-fontawesome@0.6.0 --save


angular.json=> Colocar novo tema "nova-light"

Remove-Item node_modules -Recurse => REMOVE NODE_MODULES
Remove-Item package-lock.json => REMOVE PACKAGE-LOCK.JSON
npm cache clean --force
npm install


PRIMENG:
Primeiro, remova a versão antiga do PrimeNG: npm uninstall primeng
Em seguida, instale a versão compatível do PrimeNG:
npm install primeng@9.1.3 --save
Utilizar a versão que estava disponível durante o ciclo de vida do Angular 9:
npm install primeicons@4.1.0 --save

App.component.html=>
GrowlModule => ToastModule
tag devem ter: <p-toast [baseZIndex] ="999999999"></p-toast>
Nos component.ts colocar=>
import { ToastModule } from 'primeng/toast'; //Essa era GrowlModule


import { DataTableModule } from 'primeng/datatable'; //Antes
import { TableModule } from 'primeng/table'; //DEPOIS

APARTIR DAQUI DEIXAR O PACKAGE.JSON EXATAMENTE IGUAL AO SCRIPT NO GPT COM NOME:
PACKAGE.JSON-ANGULAR9-RENDERIZANDO
APÓS:
Remove-Item node_modules -Recurse => REMOVE NODE_MODULES
Remove-Item package-lock.json => REMOVE PACKAGE-LOCK.JSON
npm install
ng serve


NOVAS:
import { TableModule } from 'primeng/table'; //Essa era DataTableModule
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast'; //Essa era GrowlModule
import { SelectItem } from 'primeng/api'; => ERA import { SelectItem } from 'primeng/components/common/selectitem';
EXCLUIR => import { SharedModule } from 'primeng/components/common/shared';

--COMMIT=>"070624(5)"

No HTML as tags eram:
<p-dataTable [value]="data">
</p-dataTable>
PASSARAM PARA:
<p-Table [value]="data">
</p-Table>


npm install ng2-currency-mask@9

tsconfig.json :
{
  "angularCompilerOptions": {
    "enableIvy": true
  }
}



A branch do git é UpdateV8
--COMMIT=>"070624(6)"
--COMMIT=>"070624(7)" OCUPAÇÃO HOSPITALAR PRONTA
--COMMIT=>"070624(8)" EXAMES TAMBÉM PRONTO
--COMMIT=>"070624(9)" INDICADOR FLASH TAMBÉM PRONTO
--COMMIT=>"070624(10)" AGENDA CIRÚRGICA TAMBÉM PRONTA E TODOS FILTROS
--COMMIT=>"070624(11)" PAINEL EMERGÊNCIA TAMBÉM PRONTO E TODOS FILTROS


Novo div Primeng 9:
  <div class="p-grid">
    <div class="p-col-12 p-fluid">
-----p-table--------------------
    </div>
  </div>


--COMMIT=>"070624(12)" PROTOCOLOS,AGENDA,PACIENTES,CO-MANEJO, SOLICITAÇÕES TAMBÉM PRONTOS E TODOS FILTROS
--COMMIT=>"070624(13)" RESTANTE DOS COMPONENTES TAMBÉM PRONTOS E TODOS FILTROS ANGULAR 9 COMPLETO E FUNCIONAL


DE static forRoot(options: JwtModuleOptions): ModuleWithProviders;
PARA static forRoot(options: JwtModuleOptions): ModuleWithProviders<JwtModule>; 


npm install @auth0/angular-jwt@4.0.0 => Para Angular 9 =>09/07/20
FIM.
_________________________________________________________________________________________________

MIGRAÇÃO ANGULAR 10

Dentro dos arquivos de teste.service:
Sai  TestBed.get
Entra  TestBed.inject

NODE precisa ser de versão 18 somente para instalar.

No app.components.ts :
A importação era => import { and } from "@angular/router/esm5/src/utils/collection";
Deve atualizar para import { and } from "@angular/router/esm2015/src/utils/collection";

--COMMIT=>"070624(14)" ANGULAR 10
--COMMIT=>"070624(15)" REMOVE COMMONJS NO ANGULAR.JSON COM:
"build": {
  "builder": "@angular-devkit/build-angular:browser",
  "options": {
     "allowedCommonJsDependencies": [
        "crypto-js",
        "chart.js"]
…}…}, SOMENTE NO PROD

--COMMIT=>"070624(16)" AJUSTE PÁGINA DE LOGIN
____________________________________________________________________________________________________

MIGRAÇÃO ANGULAR 11

ng update @angular/core@11 @angular/cli@11

Remove-Item node_modules -Recurse => REMOVE NODE_MODULES
Remove-Item package-lock.json => REMOVE PACKAGE-LOCK.JSON
npm cache clean --force
npm install --NÃO FUNCIONOU AQUI E SIM NO PRÓXIMO PASSO:
npm i ng2-currency-mask@11 --force

--COMMIT=>"070624(17)" ANGULAR 11

npm i @angular/cdk@11 --force

npm uninstall @fortawesome/angular-fontawesome
npm install @fortawesome/angular-fontawesome@0.8.0 --force => PARA NOVA VERSÃO

npm install primeng@11 --force => NOVA VERSÃO

npm install

--COMMIT=>"070624(19)" ANGULAR 11 COM PRIMENG 11


npm i jasmine-core@3.8 --force


Explicações Novo Primeflex 2.0:
p-grid: Essa classe cria um contêiner de grade flexível, que divide o espaço disponível em uma série de colunas que podem ser usadas para layout. No PrimeFlex 2.0, as grades são baseadas no CSS Flexbox.

p-col: Cada p-col representa uma coluna dentro de uma grade (p-grid). Por padrão, o espaço é distribuído igualmente entre as colunas se um número de colunas não for especificado.

p-col-12: Especifica que a coluna ocupará todas as 12 unidades da largura disponível na grade, o que equivale a 100% de largura. As grades do PrimeFlex são baseadas em 12 colunas.

p-fluid: Faz com que os elementos dentro dessa coluna fluam e ocupem 100% da largura disponível, o que é útil para inputs e botões.

Este código organiza o layout de um formulário de login, garantindo que ele seja responsivo e bem estruturado usando as classes do PrimeFlex 2.0.

--COMMIT=>"070624(22)" ANGULAR 11 ROLE NAVBAR PROTOCOLO COM 2 ARGUMENTOS DE PERMISSÃO IMPLANTADO
--COMMIT=>"070624(23)" ANGULAR 11 E COMPONENTES ATUALIZADOS
--COMMIT=>"070624(24)" ANGULAR 11 AJUSTE SOLICITAÇÃO SENHA

SPINNER JÁ CENTRALIZADO (MODELO PRONTO):
<div *ngIf="show" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999;">
  <p-progressSpinner fill="#EEEEEE" strokeWidth="4" animationDuration=".5s"></p-progressSpinner>
</div>

--COMMIT=>"070624(25)" ÚLTIMAS MELHORIAS ANGULAR E PRIMENG 11

____________________________________________________________________________________________________

MIGRAÇÃO ANGULAR 12

ng update @angular/core@12 @angular/cli@12

Erro com os loadChildrem resolvidos ajustando os operadores: module, target e lib para "es2020" no tsconfig.json e também a mesma coisa no tsconfig.app.json o operador module para es2020.

npm install

--COMMIT=>"070624(26)" ANGULAR 12 E COMPONENTES ATUALIZADOS

Novo comando para build de produção v12= --configuration production --base-href ./ --output-path=./app/ 

--COMMIT=>"070624(27)" ANGULAR 12 E COMPONENTES ATUALIZADOS+

PRIMENG 12
npm install @angular/cdk@^12.0.0

npm install primeng@^12.0.0

--COMMIT=>"070624(28)" ATUALIZADOS ANGULAR 12, COMPONENTES E PRIMENG 12.

____________________________________________________________________________________________________

MIGRAÇÃO ANGULAR 13

npm install ng2-currency-mask@13

ng update @angular/core@13 @angular/cli@13

No rc/app/app.component.ts excluir a importação: import { and } from "@angular/router/esm2015/src/utils/collection";

E no outro TS src/app/login/login/login.component.ts mudar a importação import { NgForm } from "@angular/forms/esm2015/src/directives";
Para import { NgForm } from "@angular/forms/forms";

Spinner do component Agenda: Retirado a propriedade parametro "lendo" e colocado o "Show" com spinner.

npm install @fortawesome/angular-fontawesome@^0.10.2

npm install @angular/cdk@13

Ajustado layout Ocupação na responsividade

--COMMIT=>"070624(30)" ATUALIZADO ANGULAR 13

Primeng 12.1.0
npm i primeng@12.1.0

Retirar o chart.js do arquivo angular.json em:
"options": {"allowedCommonJsDependencies": [
              ...........],  

PRIMENG 13

npm install primeng@13 --save

Nas novas importações do primeng 13 os endereços perdem todas as letras maiusculas e deve-se realizar em todos componentes, só se verá progresso na compilação se mudar todos.Ex:
ANTES => import { ProgressSpinnerModule } from 'primeng/ProgressSpinner';
DEPOIS => import { ProgressSpinnerModule } from 'primeng/progressspinner';

--COMMIT=>"070624(32)" ATUALIZADO ANGULAR 13 E PRIMENG 13 FUNCIONANDO.

_______________________________________________________________________________________________________

MIGRAÇÃO ANGULAR 14

ng update @angular/core@14 @angular/cli@14

Após instalação no repasse.component.ts remover a importação:
import { typeWithParameters } from "@angular/compiler/src/render3/util";

E no login,component.ts atualizar a importação:
import { NgForm } from "@angular/forms/forms";
PARA:  import { NgForm } from "@angular/forms";

npm i @angular/cdk@14 --force

--COMMIT=>"070624(34)" ATUALIZADO ANGULAR 14 MAS PRIMENG 13.

--COMMIT=>"070624(35)" ATUALIZADO ANGULAR 14 E PRIMENG 14.

--COMMIT=>"070624(36)" ATUALIZADO ANGULAR 14 E PRIMENG 14.2.3.
_______________________________________________________________________________________________________
                  
MIGRAÇÃO ANGULAR 15

ng update @angular/core@15 @angular/cli@15

npm i @angular/cdk@15 --force

--COMMIT=>"070624(38)" ATUALIZADO ANGULAR 15 E PRIMENG 14.2.3.

PRIMENG 15

Problema, captcha do primeng descontinuado.

Removido o captcha.

--COMMIT=>"070624(39)" ATUALIZADO ANGULAR 15 E PRIMENG 15.

--COMMIT=>"070624(40)" typescript": "^4.9.3.

_________________________________________________________________________________________________________

MIGRAÇÃO ANGULAR 16

Zone.js versão 0.13.x ou post.: npm i zone.js@0.13 --force

ng update @angular/core@16 @angular/cli@16

TSCONFIG.JSON:
  "angularCompilerOptions": {
    "enableIvy": false
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/environments/environment.prod.ts",
    "src/environments/firebase.config.ts"
  ]

Usar node 18.20

Install "@auth0/angular-jwt": "^5.1.2",

ANGULAR.JSON:
     "allowedCommonJsDependencies": ["crypto-js","url","quill","moment","lodash"],

Remove-Item node_modules -Recurse => REMOVE NODE_MODULES
Remove-Item package-lock.json => REMOVE PACKAGE-LOCK.JSON
npm install

--COMMIT=>"070624(41)" Angular 16.2.12 e Builders com sucesso (app,appx).

--COMMIT=>"070624(42)" npm i @angular/cdk@16.2.12 --force.

PRIMENG 16

npm i primeng@16 --force

Nos templates HTML que constar com links router "a", agora nesta versão primeng modificar todos para "button", ex:
ANTES=
<td>
    <a [routerLink]="['/comunicacao', lanc.id]"></button>
</td>
DEPOIS=
<td>
    <button [routerLink]="['/comunicacao', lanc.id]"></button>
</td>

--11/09/24 COMMIT=>"070624(43)" Completo mas sem login auth no TomCat.

npm install @auth0/angular-jwt@5
npm install @angular/forms@16
npm install @schematics/angular@^16
npm install @angular-devkit/schematics@^16
npm install @angular/pwa@16
npm install @angular/router@16

Remove-Item node_modules -Recurse => REMOVE NODE_MODULES
Remove-Item package-lock.json => REMOVE PACKAGE-LOCK.JSON
npm install

Colocado a função cleanCache(){} no login.component.ts para forçar a limpeza de caches e tokens dos navegadores.

--13/09/24 COMMIT=>"070624(45)" Completo com Login auth no TomCat.

____________________________________________________________________________________________________________________

MIGRAÇÃO ANGULAR 17

Node v18.13 ou posterior.

Typescript v5.2.0 ou posterior.

Zone.js v0.14.x ou posterior.

--17/09/24 COMMIT=>"070624(46)" Após atualizações citadas. 

ng update @angular/core@17 @angular/cli@17 --force.

--17/09/24 COMMIT=>"070624(47)" Angular 17.3.9 e Add o metodo: checkForUpdates(){} no app.module.ts

PRIMENG 17

--18/09/24 COMMIT=>"070624(48)" Angular 17.3.9 e Primeng 16.

--24/09/24 COMMIT=>"070624(49)" Angular 17.3.9 e Primeng 16 e TEMPLATE PROTOCOLO AJUSTADO E NOVO.

________________________________________________________________________________________________________________


MIGRAÇÃO ANGULAR 18

npm install -g @angular/cli@18


--25/09/24 COMMIT=>"070624(50)" Angular 18.2.5 e Primeng 16


--01/10/24 COMMIT=>"070624(51)" Angular 18.2.5 e Primeng 17 Retirado P-DataView do primeng.

--02/10/24 COMMIT=>"070624(52)" Angular 18.2.5 e Primeng 17.

--07/10/2024 commit=>"070624(53)" VINCULAÇÃO AO GIT https://github.com/ViniVLS/appHdpDivina





