import { http, HttpResponse } from "msw";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(
    "https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM",
    () => {
      // ...and respond to them using this JSON response.
      return HttpResponse.json({
        id: "1",
        urls: {
          raw: "https://images.unsplash.com/photo-1726571175984-96bae5054c26?ixid=M3wyNTAyMTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDc4NzV8&ixlib=rb-4.0.3",
          full: "https://images.unsplash.com/photo-1726571175984-96bae5054c26?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyNTAyMTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDc4NzV8&ixlib=rb-4.0.3&q=85",
          regular:
            "https://images.unsplash.com/photo-1726571175984-96bae5054c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNTAyMTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDc4NzV8&ixlib=rb-4.0.3&q=80&w=1080",
          small:
            "https://images.unsplash.com/photo-1726571175984-96bae5054c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNTAyMTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDc4NzV8&ixlib=rb-4.0.3&q=80&w=400",
          thumb:
            "https://images.unsplash.com/photo-1726571175984-96bae5054c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNTAyMTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDc4NzV8&ixlib=rb-4.0.3&q=80&w=200",
          small_s3:
            "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1726571175984-96bae5054c26",
        },
      });
    }
  ),
];
