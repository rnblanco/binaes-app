import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { GlobalMessageService } from "../services/global-message.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private readonly globalMessageService: GlobalMessageService) {}

  handleError(error: any) {
    let message = null as any;
    switch (error.statusCode) {
        case 500:
            message = 'Error en el servidor desconocido';
            break;
        default:
            message = error.message
      }
    this.globalMessageService.setPayload({
        type: 'error',
        title: 'Error',
        body: message
    });
  }
}