import { BaseScreen } from "@/core/component/base-screen.component"

export class NotFound extends BaseScreen {
    constructor()
    {
        super({ title: '404' })
    }

    render()
    {
        return '<p>404</p>'
    }
}