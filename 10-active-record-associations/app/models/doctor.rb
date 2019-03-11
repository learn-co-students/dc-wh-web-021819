class Doctor < ActiveRecord::Base

    belongs_to :hospital
    has_many :doctor_patients
    has_many :patients, through: :doctor_patients
end