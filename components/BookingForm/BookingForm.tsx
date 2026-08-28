export default function BookingForm() {
  return (
    <section>
      <h2>Book your camper</h2>

      <form>
        <input type="text" name="name" placeholder="Name" />

        <input type="email" name="email" placeholder="Email" />

        <input type="text" name="bookingDate" placeholder="Booking date" />

        <textarea name="comment" placeholder="Comment" />

        <button type="submit">Send</button>
      </form>
    </section>
  );
}
