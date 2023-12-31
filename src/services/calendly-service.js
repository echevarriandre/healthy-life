import calendlyApi from "../axios.config";

class CalendlyService {
  getEvents() {
    return calendlyApi.get("scheduled_events", {
      params: { user: import.meta.env.VITE_CALENDLY_USER, status: "active", min_start_time: new Date() },
    });
  }

  cancelEvent(uuid, reason = null) {
    return calendlyApi.post(`scheduled_events/${uuid}/cancellation`, { reason });
  }
}

export default new CalendlyService();
