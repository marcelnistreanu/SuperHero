interface HttpResponse<T> {
  isSuccess: boolean;
  isFailure: boolean;
  error: any;
  value: T;
}
