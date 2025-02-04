import apiClient from './api-client';

class HttpService {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getData<T>() {
    return apiClient.get<T>(this.endPoint);
  }
}

export default HttpService;
