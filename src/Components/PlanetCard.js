import React from "react";
import {
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Badge
} from "reactstrap";

const PlanetCard = props => {
    return (
        <Col xs="6" sm="4" key={props.id}>
            <Card outline color="warning">

                <CardBody>
                    <h1> <CardTitle>Nasa: {props.title}</CardTitle></h1>
                    <CardSubtitle>{props.explanation}</CardSubtitle>
                    
                    <CardText>
                        <Badge color="info">
                            Nasa Date:{" "}
                            <small className="text-warning">{props.date}</small>
                        </Badge>
                    </CardText>
                </CardBody>

                <CardImg
                    top
                    width="40%"
                    border-radius="5rem"
                    src={props.url}
                    alt="Card image cap"
                />
                <CardText>©{props.copyright}</CardText>
            </Card>
        </Col>

        // <div className="planet-list" key={props.id}>
        //     <img className="planet-img" alt="planet" src={props.url} />
        //     <h1>{props.title}</h1>
        //     <p>{props.explanation}</p>
        //     {/* <h2>Copyright: {props.copyright}</h2>
        //     <p>Explanation: {props.explanation}</p>
        //     <p>Date: {props.date}</p> */}
        // </div>
    )
};

export default PlanetCard;