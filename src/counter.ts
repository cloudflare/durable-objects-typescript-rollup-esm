export class CounterTs {
  state: DurableObjectState

  constructor(state: DurableObjectState, env: Env) {
    this.state = state;
  }

  // Handle HTTP requests from clients.
  async fetch(request: Request) {
    // Apply requested action.
    let url = new URL(request.url);
    let value: number = await this.state.storage?.get("value") || 0;
    switch (url.pathname) {
    case "/increment":
      ++value;
      await this.state.storage?.put("value", value);
      break;
    case "/decrement":
      --value;
      await this.state.storage?.put("value", value);
      break;
    case "/":
      // Just serve the current value. No storage calls needed!
      break;
    default:
      return new Response("Not found", {status: 404});
    }

    return new Response(value.toString());
  }
}

interface Env {}
