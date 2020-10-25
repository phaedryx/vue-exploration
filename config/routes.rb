# frozen_string_literal:true

Rails.application.routes.draw do
  root 'widgets#index'

  resources :widget, only: %i[index show edit update]
end
