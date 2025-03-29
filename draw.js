export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = "ktlun.dlun.tk";
    return fetch(url, request);
  }
}
