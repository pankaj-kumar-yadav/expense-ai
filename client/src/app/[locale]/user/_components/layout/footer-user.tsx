import { appNameFull } from "@/constants/app-info/app-info-constants";

const FooterUser: React.FC = () => {
    return (
        <footer className="w-full border-t bg-background/95 py-4">
            <div className="container text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} {appNameFull}. All rights reserved.
            </div>
        </footer>
    );
}

export default FooterUser;
