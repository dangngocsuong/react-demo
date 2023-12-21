declare namespace App {
    //type Any = any;
    
    type Theme = {
        theme: string;
        setTheme: (val: string) => void;
    }

    type Posts = {
        id: number;
        image: string;
        title: string;
        body: string;
        userId: number;
    }

    type User = {
        id: number;
        name: string;
        username: string;
        email: number;
        password: string;
    }

    type Products = {
        name: string;
        price: number;
    }

    type User = {
        id: number;
        name: string;
        username: string;
        email: string;
        password: string;
    }

    type Crumb = {
        id: string;
        pathname: string;
        params: Params<string>;
        data: unknown;
        handle: unknown;
    }

    interface Item {
        key: string;
        id: number;
        image: string;
        title: string;
        body: string;
        userId: number;
    }

    interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
        editing: boolean;
        dataIndex: string;
        title: string;
        inputType: 'number' | 'text';
        record: Item;
        index: number;
        children: React.ReactNode;
    }

    interface PostCreateFormProps {
        open: boolean;
        onCreatePost: (values: Item) => void;
        onCancel: () => void;
    }

    type FormFieldType = {
        firstName?: string,
        lastName?: string,
        email?: string;
        username?: string;
        password?: string;
        gender?: string;
        search?: string;
    };
}