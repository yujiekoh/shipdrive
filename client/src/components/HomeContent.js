import React from 'react';
import { Typography } from "antd";
import { Card, Col, Row } from "antd";
import { CheckCircleTwoTone } from '@ant-design/icons';

const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography;

const HomeContent = () => {
    return (
      <div className="App">
        <br />
        <Title>shipdrive</Title>
        <Title level={3}>ship projects on time, drive your team forward</Title>
        <Title level={5}>
          The SaaS tool for engineering teams to track their projects
        </Title>

        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={8}>
              <Card
                title={<Title level={4}>Starter</Title>}
                bordered={true}
                hoverable
                style={{ height: 350 }}
              >
                {<Title level={2}>Free</Title>}
                <br />
                <Paragraph>
                  <ul className="pricing">
                    <li>
                      {
                        <Title level={4}>
                          <CheckCircleTwoTone
                            className="pricing__icon-1"
                            twoToneColor="#52c41a"
                          />{" "}
                          Unlimited projects
                        </Title>
                      }
                    </li>
                    <li>
                      {
                        <Title level={4}>
                          <CheckCircleTwoTone
                            className="pricing__icon-2"
                            twoToneColor="#52c41a"
                          />{" "}
                          Unlimited tickets
                        </Title>
                      }
                    </li>
                  </ul>
                </Paragraph>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title={<Title level={4}>Professional</Title>}
                bordered={true}
                hoverable
                style={{ height: 350 }}
              >
                {<Title level={2}>$5 per team/month</Title>}
                <br />
                <Paragraph>
                  <ul className="pricing">
                    <li>
                      {
                        <Title level={4}>
                          <CheckCircleTwoTone
                            className="pricing__icon-1"
                            twoToneColor="#52c41a"
                          />{" "}
                          Unlimited projects
                        </Title>
                      }
                    </li>
                    <li>
                      {
                        <Title level={4}>
                          <CheckCircleTwoTone
                            className="pricing__icon-2"
                            twoToneColor="#52c41a"
                          />{" "}
                          Unlimited tickets
                        </Title>
                      }
                    </li>
                    <li>
                      {
                        <Title level={4}>
                          <CheckCircleTwoTone
                            className="pricing__icon-3"
                            twoToneColor="#52c41a"
                          />{" "}
                          Invite-only private projects
                        </Title>
                      }
                    </li>
                  </ul>
                </Paragraph>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title={<Title level={4}>Organization</Title>}
                bordered={true}
                hoverable
                style={{ height: 350 }}
              >
                {<Title level={2}>$15 per team/month</Title>}
                <br />
                <Paragraph>
                  <ul className="pricing">
                    <li>
                      {
                        <Title level={4}>
                          <CheckCircleTwoTone
                            className="pricing__icon-1"
                            twoToneColor="#52c41a"
                          />{" "}
                          Unlimited projects
                        </Title>
                      }
                    </li>
                    <li>
                      {
                        <Title level={4}>
                          <CheckCircleTwoTone
                            className="pricing__icon-2"
                            twoToneColor="#52c41a"
                          />{" "}
                          Unlimited tickets
                        </Title>
                      }
                    </li>
                    <li>
                      {
                        <Title level={4}>
                          <CheckCircleTwoTone
                            className="pricing__icon-3"
                            twoToneColor="#52c41a"
                          />{" "}
                          Invite-only private projects
                        </Title>
                      }
                    </li>
                    <li>
                      {
                        <Title level={4}>
                          <CheckCircleTwoTone
                            className="pricing__icon-4"
                            twoToneColor="#52c41a"
                          />{" "}
                          Priority customer support
                        </Title>
                      }
                    </li>
                  </ul>
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
}

export default HomeContent
