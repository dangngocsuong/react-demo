import React from "react";
import { Link, useMatches } from "react-router-dom";
import { Breadcrumb } from "antd";
import { SitePageTitle } from "./styled";
import Title from "antd/es/typography/Title";
import { Container } from "styles/common";
import { useTranslation } from 'react-i18next';

const PageTitle: React.FunctionComponent = () => {
    const breadcrumb: App.Crumb[] = useMatches();
    const { t } = useTranslation();

    let crumb = breadcrumb
        .filter((match) => Boolean(match.handle))
        .map((match) => {
            return match.handle.map((handle, index) => {
                if (index === match.handle.length - 1) {
                    return ({ title: handle.crumb.props.children })
                }
                return ({ title: <Link to={handle.crumb.props.to}>{handle.crumb.props.children}</Link> })
            })
        });
        
    return (
        <SitePageTitle>
                <div className="page-title__overlay"></div>
                <Container>
                    <Title level={1}>{t('pagetitle')}</Title>
                    <Breadcrumb items={crumb[0]} />
                </Container>
        </SitePageTitle>
    )
}

export default PageTitle;