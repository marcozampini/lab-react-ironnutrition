import { Card, Col, Button } from 'antd';
const FoodBox = (props) => {
  //
  // name: 'Orange',
  // calories: 85,
  // image: 'https://i.imgur.com/abKGOcv.jpg',
  // servings: 1,
  return (
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt={props.food.name} />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>
            Total Calories: {props.food.calories * props.food.servings} kcal
          </b>
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
};
export default FoodBox;
