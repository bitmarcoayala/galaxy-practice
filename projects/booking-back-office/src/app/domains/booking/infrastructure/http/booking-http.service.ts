/*import { BaseHttpService } from "../../../../core/services/base.http.service";

@Injectable({ providedIn: 'root' })
export class BookingHttpService extends BaseHttpService {

  private url = `${this.baseUrl}/Bookings`;

  constructor() {
    super();
  }

  getAll(): Promise<BookingResponseDto[]> {
    return firstValueFrom(this.http.get<BookingResponseDto[]>(this.url));
  }
  
  getAll():Observable<IBooking[]>{
     return this.httpClient.get<IBooking[]>(this.uri);
   }


  create(model: CreateBookingHttpDto): Promise<void> {
    return firstValueFrom(this.http.post<void>(this.baseUrl, model));
  }

  async filterTotalCount(BookingFilterDto: BookingFilterDto): Promise<number> {
    const params = new HttpParams({
      fromObject: {
        title: BookingFilterDto.title ?? '',
        categoryId: BookingFilterDto.categoryId?.toString() ?? '',
      },
    });

    const Bookings = await lastValueFrom(
      this.http.get<any[]>(this.url, { params })
    );

    return Bookings.length;
  }

  async filterPaginated(BookingFilterDto: BookingFilterDto ): Promise<BookingResponseDto[]> {

    const limit = BookingFilterDto.limit ?? 10;
    const offset = BookingFilterDto.offset ?? 0;

    const queryParams: Record<string, string> = {
      limit: limit.toString(),
      offset: offset.toString(),
    };

    if (BookingFilterDto.title) {
      queryParams['title'] = BookingFilterDto.title;
    }

    if (BookingFilterDto.categoryId != null) {
      queryParams['categoryId'] = BookingFilterDto.categoryId.toString();
    }

    const params = new HttpParams({ fromObject: queryParams });

    console.log(this.url);
    console.log(params.toString());

    return await lastValueFrom(
      this.http.get<BookingResponseDto[]>(this.url, { params })
    );
  }

  async filterTotalAndPaginated(BookingFilterDto: BookingFilterDto): Promise<BookingResponsePaginatedDto> {
    try{
    return await lastValueFrom(
      forkJoin({
        total: this.filterTotalCount(BookingFilterDto),
        Bookings: this.filterPaginated(BookingFilterDto),
      })
    );
    } catch (error) {
      console.error('Error al filtrar Bookingos:', error);
      throw error;
    }
  }

}
*/