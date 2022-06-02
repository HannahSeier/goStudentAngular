export class ErrorMessage { constructor(
  public forControl: string, public forValidator: string, public text: string
){} }

export const OfferFormErrorMessages = [
  new ErrorMessage('title', 'required', 'Es muss ein Kurstitel angegeben werden'),
  new ErrorMessage('date', 'required', 'Es muss ein Datum angegeben werden'),
  new ErrorMessage('date', 'futureDate', 'Es muss ein Datum in der Zukunft angegeben werden'),
  new ErrorMessage('description', 'required', 'Es muss eine Beschreibung angegeben werden'),
  new ErrorMessage('start', 'required', 'Es muss eine Startzeit angegeben werden'),
  new ErrorMessage('start', 'required', 'Es muss eine Endzeit angegeben werden'),

];
