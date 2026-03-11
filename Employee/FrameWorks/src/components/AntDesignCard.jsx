import { Card, Button } from "antd";

function AntDesignCard() {
    return (
        <Card
            title="Student Profile (Ant Design)"
            bordered={true}
            hoverable  
            className=" max-w-sm mx-auto mt-5 w-50" >
            <p>
                Name: Prachi Parmar <br />
                Course: React Fundamentals
            </p>
            <Button type="primary">View Profile</Button>
        </Card>
    );
}

export default AntDesignCard;
