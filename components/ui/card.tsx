"use client";

import * as React from "react";

import { cn } from "./utils";

interface CardProps extends React.ComponentProps<"div"> {}
export const Card: React.FC<CardProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
        className,
      )}
      {...props}
    />
  );
};

interface CardHeaderProps extends React.ComponentProps<"div"> {}
export const CardHeader: React.FC<CardHeaderProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
};

interface CardTitleProps extends React.ComponentProps<"h4"> {}
export const CardTitle: React.FC<CardTitleProps> = ({ className, ...props }) => {
  return (
    <h4
      data-slot="card-title"
      className={cn("leading-none", className)}
      {...props}
    />
  );
};

interface CardDescriptionProps extends React.ComponentProps<"p"> {}
export const CardDescription: React.FC<CardDescriptionProps> = ({ className, ...props }) => {
  return (
    <p
      data-slot="card-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
};

interface CardActionProps extends React.ComponentProps<"div"> {}
export const CardAction: React.FC<CardActionProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
};

interface CardContentProps extends React.ComponentProps<"div"> {}
export const CardContent: React.FC<CardContentProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 [&:last-child]:pb-6", className)}
      {...props}
    />
  );
};

interface CardFooterProps extends React.ComponentProps<"div"> {}
export const CardFooter: React.FC<CardFooterProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
};
