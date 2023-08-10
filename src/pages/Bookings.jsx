import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import Empty from "../ui/Empty";

function Bookings() {
  const bookings = [];

  if (!bookings) return <Empty resourceName="bookings"></Empty>;
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;
