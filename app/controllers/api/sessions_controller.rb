class Api::SessionsController < ApplicationController
     def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        # debugger

        if @user.nil?
            render json: ["Invalid username/password combination"], status: 401
        else 
            login!(@user)
            render "api/users/show"
        end
    end

    def destroy
        if logged_in?
            logout!
            render json: {}
        else
            render json: "user not logged in", status: 404
        end
    end
end
