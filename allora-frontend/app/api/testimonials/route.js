export async function GET(request) {
    const testimonials = [
      { text: "This store has the best products! Highly recommended.", author: "John Doe" },
      { text: "Amazing customer service and fast delivery.", author: "Jane Smith" },
      { text: "I found everything I was looking for, and more!", author: "Sarah Brown" },
    ];
    return new Response(JSON.stringify(testimonials), {
      headers: { "Content-Type": "application/json" },
    });
  }
  