<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'empty_data' => '',
                'constraints' => [
                    new NotBlank(),
                    new Length(min: 3),
                ],
            ])
            ->add('email', EmailType::class, [
                'empty_data' => '',
                'constraints' => [
                    new NotBlank(),
                    new Email(),
                ],
            ])
            ->add('message', TextareaType::class, [
                'empty_data' => '',
                'constraints' => [
                    new NotBlank(),
                    new Length(min: 3),
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
        ]);
    }
}
